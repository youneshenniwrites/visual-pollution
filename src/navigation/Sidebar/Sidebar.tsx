import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import test1 from "../../assets/icons/test1.svg";
import test2 from "../../assets/icons/test2.svg";
import test3 from "../../assets/icons/test3.svg";
import test4 from "../../assets/icons/test4.svg";
import test5 from "../../assets/icons/test5.svg";

const SidebarMenu = () => {
  return (
    <Sidebar>
      <Menu>
        <MenuItem component={<Link to="/home" />}>
          <a href="https://react.dev" target="_blank">
            <img src={test1} />
          </a>
        </MenuItem>
        <MenuItem component={<Link to="/country" />}>
          <a href="https://react.dev" target="_blank">
            <img src={test1} />
          </a>
        </MenuItem>
        <MenuItem component={<Link to="/factories" />}>
          <a href="https://react.dev" target="_blank">
            <img src={test2} />
          </a>
        </MenuItem>
        <MenuItem component={<Link to="/labour" />}>
          <a href="https://react.dev" target="_blank">
            <img src={test3} />
          </a>
        </MenuItem>
        <MenuItem component={<Link to="/health" />}>
          <a href="https://react.dev" target="_blank">
            <img src={test4} />
          </a>
        </MenuItem>
        <MenuItem component={<Link to="/transport" />}>
          <a href="https://react.dev" target="_blank">
            <img src={test5} />
          </a>
        </MenuItem>
        <MenuItem component={<Link to="/test1" />}>
          <a href="https://react.dev" target="_blank">
            <img src={test4} />
          </a>
        </MenuItem>
        <MenuItem component={<Link to="/test2" />}>
          <a href="https://react.dev" target="_blank">
            <img src={test4} />
          </a>
        </MenuItem>
        <MenuItem component={<Link to="/community" />}>
          <a href="https://react.dev" target="_blank">
            <img src={test4} />
          </a>
        </MenuItem>
        <MenuItem component={<Link to="/test3" />}>
          <a href="https://react.dev" target="_blank">
            <img src={test4} />
          </a>{" "}
        </MenuItem>
        <MenuItem component={<Link to="/test4" />}>
          <a href="https://react.dev" target="_blank">
            <img src={test4} />
          </a>
        </MenuItem>
        <MenuItem component={<Link to="/test5" />}>
          <a href="https://react.dev" target="_blank">
            <img src={test4} />
          </a>
        </MenuItem>
        <MenuItem component={<Link to="/test6" />}>
          <a href="https://react.dev" target="_blank">
            <img src={test4} />
          </a>
        </MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default SidebarMenu;
