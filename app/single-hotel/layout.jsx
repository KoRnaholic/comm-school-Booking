// import Search from "@/components/search/Search";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {/* <Search type="forNav" /> */}
        {children}
      </main>
    </div>
  );
};

export default Layout;
