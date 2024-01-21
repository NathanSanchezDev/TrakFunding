import { AppConfig } from '../utils/AppConfig';

const FooterCopyright = () => {
  return (
    <div className="footer-copyright">
      © Copyright {new Date().getFullYear()} {AppConfig.site_name}
      by <a href="https://www.linkedin.com/in/nathansanchez239//">Nathan Sanchez</a>
      <style jsx>
        {`
        .footer-copyright :global(a) {
          @apply text-primary-500;
        }

        .footer-copyright :global(a:hover) {
          @apply underline;
        }
      `}
      </style>
    </div>
  );
};

export { FooterCopyright };
