import { useContext, useState } from "react";
import { StyledParagraph, StyledTitleOne } from "../../../Styles/typography";
import { ModalEditTech } from "../../ModalEditTech";
import { TechContext } from "../../../providers/TechContext";

export function List({ id, title, status }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <li onClick={() => setIsOpen(true)}>
        <StyledTitleOne>{title}</StyledTitleOne>
        <StyledParagraph fontStyle="italic">{status}</StyledParagraph>
      </li>
      {isOpen ? (
        <ModalEditTech id={id} title={title} setIsOpen={setIsOpen} />
      ) : null}
    </>
  );
}
