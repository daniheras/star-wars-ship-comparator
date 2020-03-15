import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { ApolloQueryResult } from 'apollo-client';

export interface Starship {
  __typename?: 'Starship';
  cargoCapacity?: number;
  class?: string;
  consumables?: string;
  costInCredits?: number;
  createdAt: number | string;
  crew?: number;
  films?: Array<any>;
  hyperdriveRating?: number;
  id: string;
  isPublished: boolean;
  length?: number;
  manufacturer?: Array<string>;
  maxAtmospheringSpeed?: number;
  mglt?: number;
  name: string;
  passengers?: number;
  pilots?: Array<any>;
  updatedAt: number | string;
  _filmsMeta: any;
  _pilotsMeta: any;
}

@Injectable({
  providedIn: 'root'
})
export class ComparatorService {

  public ships$: Observable<Starship[]>;

  constructor(private apollo: Apollo) {}

  fetchShips() {
    this.ships$ = this.apollo.query({
      query: gql`
        query getShips {
          allStarships {
            id
            name
            crew
            costInCredits
            cargoCapacity
            hyperdriveRating
            length
            maxAtmospheringSpeed
            passengers
          }
        }
      `
    }).pipe(
      pluck('data', 'allStarships')
    );
  }
}
