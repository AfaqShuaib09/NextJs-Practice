export default function DashboardLayout({
  children, // will be a page or nested layout
}) {
  return (
    <section>
      <header className="bg-light text-center text-lg-start mb-0">
        <div className="container">
          <div className="d-flex justify-content-center py-5">
            <h1 className="display-5 fw-bold bg-gray">Welcome to My Blog</h1>
          </div>
        </div>
      </header>
      {children}
      <footer className="position-absolute bottom-0 w-100 bg-light text-center text-lg-start">
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2023 made with ❤️ by in Next JS
          
        </div>
      </footer>
    </section>
  );
}
