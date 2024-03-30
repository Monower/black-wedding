import Menu from "./Menu";

const Navbar = () => {
    return (<>
        <nav class="fixed top-0 left-0 right-0 container mx-auto p-4 flex items-center justify-between ">
            <div class="">
                <img class="w-[213px]" src="/images/logo.png" alt="Logo" />
            </div>
            <Menu />
        </nav>
    </>)
};

export default Navbar;