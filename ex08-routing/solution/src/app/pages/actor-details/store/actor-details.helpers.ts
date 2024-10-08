import { Actor } from '../../../models/actor.model';

export function actorImageUrl(actor: Actor | null, baseUrl: string): string {
  if (!actor) return '';

  return actor ? `${baseUrl}/actors/${actor.imageFileName}` : '';
}
