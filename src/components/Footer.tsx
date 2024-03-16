import Icon from "./Icon";

function Footer() {
  return (
    <footer className="flex flex-col gap-3 items-center">
      <p className="text-neutral-400 leading-5">Follow us</p>
      <ul className="flex gap-3">
        <li>
          <a href="http://facebook.com" className="block hover:opacity-50">
            <span className="sr-only">Follow us on Facebook</span>
            <Icon size="small" icon="facebook" />
          </a>
        </li>
        <li>
          <a href="http://x.com" className="block hover:opacity-50">
            <span className="sr-only">Follow us on X</span>
            <Icon size="small" icon="x" />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
