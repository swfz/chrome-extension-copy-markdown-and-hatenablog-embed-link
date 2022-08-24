import "./style.css";

function copy(str: string) {
  const listener = (event: any) => {
    event.clipboardData.setData("text/plain", str);
    event.preventDefault();
  };
  document.addEventListener("copy", listener);
  document.execCommand("copy");
  document.removeEventListener("copy", listener);
}

// [bookmarklets/bookmarklets at master · swfz/bookmarklets](https://github.com/swfz/bookmarklets/tree/master/bookmarklets)
// [https://github.com/swfz/bookmarklets/tree/master/bookmarklets:embed:cite]
chrome.tabs.query(
  {
    active: true,
    currentWindow: true,
  },
  (tabs) => {
    const { title, url } = tabs[0];
    copy(
      `[${title}](${url})\n\n[${url}:embed:cite]`
    );
  }
)