/* eslint-disable @typescript-eslint/no-unsafe-function-type */
import {
  PARAMS_METADATA_KEY,
  SINGLETON_METADATA_KEY,
  STATUS_METADATA_KEY,
} from '../contants';
import { ArgMetadata } from '../types';

export function addParamMetadata(
  target: Function,
  metadata: ArgMetadata,
): void {
  const existing = Reflect.getMetadata(PARAMS_METADATA_KEY, target) || [];
  Reflect.defineMetadata(PARAMS_METADATA_KEY, [...existing, metadata], target);
}

export function getParamMetadata(target: Function): ArgMetadata[] {
  return Reflect.getMetadata(PARAMS_METADATA_KEY, target) || [];
}

export function setStatusCode(target: Function, code: number): void {
  Reflect.defineMetadata(STATUS_METADATA_KEY, code, target);
}

export function getStatusCode(target: Function): number {
  return Reflect.getMetadata(STATUS_METADATA_KEY, target) ?? 200;
}

export function setSingleton(target: Function) {
  Reflect.defineMetadata(SINGLETON_METADATA_KEY, true, target);
}

export function isSingleton(target: Function): boolean {
  return Reflect.getMetadata(SINGLETON_METADATA_KEY, target) ?? false;
}
