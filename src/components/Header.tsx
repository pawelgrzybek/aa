import avatarUrl from "../assets/avatar.png";
import Icon from "./Icon";

function Header() {
  return (
    <header className="mb-6 flex flex-col gap-6 items-center">
      <img
        src={avatarUrl}
        alt="Users avatar in a memoji style"
        loading="lazy"
        decoding="async"
        className="w-14 h-14 rounded-full"
      />
      <div className="text-center">
        <h1 className="text-3xl text-neutral-900 leading-10 font-bold tracking-wide">
          Home
        </h1>
        <p className="text-neutral-400 leading-5">Created 2 days ago</p>
      </div>
      <button
        className="hover:opacity-50"
        onClick={() => {
          navigator
            .share({ title: document.title, url: location.href })
            .then(() => console.log("Success :)"))
            .catch(() => console.error("Error :("));
        }}
      >
        <span className="sr-only">Share this page</span>
        <Icon icon="share" size="large" />
      </button>
    </header>
  );
}

export default Header;
