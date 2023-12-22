import { IoRemoveOutline } from "react-icons/io5";
import { RxDividerVertical } from "react-icons/rx";
{
  /* <RxDividerVertical /> */
}

function ProjectsPagination({ collumn }) {
  if (collumn) {
    return (
      <p id="Project-Line-Vertical">
        <RxDividerVertical />
      </p>
    );
  } else {
    return (
      <p id="Project-Line">
        <IoRemoveOutline />
      </p>
    );
  }
}

export default ProjectsPagination;
