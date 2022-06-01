import React from 'react';

import ModalPortal from 'common/portal';
import { PersonnelCounter } from 'components/PersonnelCounter';

import { PERSONNEL_TEXTS } from 'constant';

import { Backdrop } from 'common/util.styled';
import {
  Modal,
  PersonnelList,
  PersonnelItem,
  Personnel,
  PersonnelTitle,
  PersonnelAge,
} from './PersonnleModal.styled';

import { IPersonnelModalProps } from './PersonnelModal.types';

export function PersonnelModal({
  isShow,
  handleClickPersonnelModalShow,
}: IPersonnelModalProps): JSX.Element {
  const personnels = PERSONNEL_TEXTS.map(personnel => (
    <PersonnelItem key={personnel.id}>
      <Personnel>
        <PersonnelTitle>{personnel.title}</PersonnelTitle>
        <PersonnelAge>{personnel.age}</PersonnelAge>
      </Personnel>
      <PersonnelCounter />
    </PersonnelItem>
  ));

  if (isShow)
    return (
      <ModalPortal>
        <>
          <Modal>
            <PersonnelList>{personnels}</PersonnelList>
          </Modal>
          <Backdrop onClick={handleClickPersonnelModalShow} />
        </>
      </ModalPortal>
    );

  return <ModalPortal />;
}
