import { Failure } from "./";

export type Launch = {
  id: string;
  name: string;
  details: string;
  failures: Failure[];
  static_fire_date_utc: string | null;
  upcoming: boolean;
  success?: boolean | null;
  links?: { patch?: {small?: string | null}}
}