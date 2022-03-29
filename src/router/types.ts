import { PERMISSION_TYPE } from '@/constants/permission.constants';

export interface RouteMeta {
  meta?: {
    permission?: PERMISSION_TYPE;
  };
}
