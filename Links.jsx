import "./App";

import { UseInputContext } from "./context/inputContext";

export default function LInks() {
  const { inputValue, setInputValue } = UseInputContext();

  async function copyHandleClick(id) {
    const link = inputValue.find((link) => link.id === id)

    await navigator.clipboard.writeText(link.shortLink);

    setInputValue(
      inputValue.map((link) =>
        link.id === id ? { ...link, copied: true } : link,
      ),
    );
  }
  return (
    <div className="linksContainer">
      {inputValue.map((collection) => {
        return (
          <div key={collection.id} className="linkContainer">
            <p>{collection.longLink}</p>
            <div className="shortLinkContainer">
              <a href={collection.shortLink}>{collection.shortLink}</a>
              <button
                onClick={() => {
                  copyHandleClick(collection.id);
                }}
                disabled={collection.copied}
                className={collection.copied ? "copied" : "copy"}
              >
                {collection.copied ? "Copied!" : "copy"}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
