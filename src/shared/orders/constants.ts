export enum orderStatus {
  created = 0,
  confirmed,
  cancelled = 2,
  atWork = 3,
  finished = 4,
}

export const orderStatusRus: Record<orderStatus, string> = {
  [orderStatus.created]: 'Создан',
  [orderStatus.confirmed]: 'Подтверджён',
  [orderStatus.cancelled]: 'Отменён',
  [orderStatus.atWork]: 'В работе',
  [orderStatus.finished]: 'Завершён',
};
