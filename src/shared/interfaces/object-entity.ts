export interface ObjectEntityWithoutPrimaryKey {
  createdAt: Date;
  updatedAt: Date;
  isActive: boolean;
}

export interface ObjectEntity extends ObjectEntityWithoutPrimaryKey {
  id: string;
}
