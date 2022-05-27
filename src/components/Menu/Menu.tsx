import React from 'react';

import { USER_MENU_IMGS } from 'constant/constant';

import { UserMenu, MenuBtn } from 'components/Menu/Menu.styled';

function Menu(): JSX.Element {
  const userMenu = USER_MENU_IMGS.map(el => (
    <MenuBtn key={el.id} num={el.id} type="button">
      <img src={el.src} alt={el.alt} />
    </MenuBtn>
  ));

  return <UserMenu>{userMenu}</UserMenu>;
}

export default Menu;
