import { NavLink, Outlet } from "react-router-dom";

function HelpLayout() {
  return (
    <div>
      <h2>Help Layout</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum quae
        cum, perferendis eum sint repudiandae est necessitatibus nihil? Quis
        voluptas est aspernatur dignissimos voluptate? Dolore hic porro ut
        recusandae sit velit excepturi asperiores. Praesentium quia nisi ipsam
        illum, non molestiae impedit inventore sapiente expedita quod dolores
        temporibus fugit corrupti quas?
      </p>
      <nav>
        <NavLink to="faq">FAQ</NavLink>
        <NavLink to="contact">Contact</NavLink>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default HelpLayout;
