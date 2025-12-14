import Container from "./container";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container className="py-8 text-xs text-slate-500 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} VTC Shop. All rights reserved.</p>
        <p>Made for VTC Academy Frontend Lab.</p>
      </Container>
    </footer>
  );
};

export default Footer;
