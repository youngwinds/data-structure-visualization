export type QueueKeyType = 'queue';

export type QueueItemType = {
  key: string;
  value: number;
  name: string;
};

export type QueueDataType = Array<QueueItemType>;
