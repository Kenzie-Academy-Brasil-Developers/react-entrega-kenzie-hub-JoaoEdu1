import { useState } from "react";
import { StyledButton } from "../../Styles/buttons";
import { StyledParagraph, StyledTitleOne } from "../../Styles/typography";
import { StyledMainContent } from "./style";
import { List } from "./ListUl";
import { ModalAddTech } from "../ModalAddTech";
import { ModalEditTech } from "../ModalEditTech";
import { useContext } from "react";
import { TechContext } from "../../providers/TechContext";

export function MainContent() {
  const [isOpen, setIsOpen] = useState(false);

  const { techList } = useContext(TechContext);

  return (
    <>
      <StyledMainContent>
        <div>
          <StyledTitleOne>Tecnologias</StyledTitleOne>
          <StyledButton
            background="md"
            size="md"
            fontSize="bg"
            onClick={() => setIsOpen(true)}
          >
            +
          </StyledButton>
        </div>
        <ul>
          {techList.map(({ id, title, status }) => (
            <List key={id} id={id} title={title} status={status} />
          ))}
        </ul>
      </StyledMainContent>
      {isOpen ? <ModalAddTech setIsOpen={setIsOpen} /> : null}
    </>
  );
}
