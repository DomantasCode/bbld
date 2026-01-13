import React from 'react';

export enum BeyType {
  ATTACK = 'Attack',
  DEFENSE = 'Defense',
  STAMINA = 'Stamina',
  BALANCE = 'Balance'
}

export interface StatProps {
  label: string;
  value: string;
  icon: React.ReactNode;
}

export interface Achievement {
  id: number;
  title: string;
  year: string;
  description: string;
}