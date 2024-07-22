import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { Person } from '../models/person.model'; 

/**
 * Service for managing person data.
 */
@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private apiUrl = '/assets/person.json'; 

  constructor(private http: HttpClient) {} 

  /**
   * Retrieves a list of persons.
   * @returns An Observable that emits an array of Person objects.
   */
  getPersonList(): Observable<Person[]> {
    return this.http.get<Person[]>(this.apiUrl);
  }

  /**
   * Retrieves a single person by ID.
   * @param id The ID of the person to retrieve.
   * @returns An Observable that emits the Person object.
   */
  getPersonById(id: number): Observable<Person> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Person>(url);
  }

  /**
   * Adds a new person.
   * @param person The person object to add.
   * @returns An Observable that emits the added Person object.
   */
  addPerson(person: Person): Observable<Person> {
    return this.http.post<Person>(this.apiUrl, person);
  }

  /**
   * Updates an existing person.
   * @param person The updated person object.
   * @returns An Observable that emits the updated Person object.
   */
  updatePerson(person: Person): Observable<Person> {
    const url = `${this.apiUrl}/${person.id}`;
    return this.http.put<Person>(url, person);
  }

  /**
   * Deletes a person by ID.
   * @param id The ID of the person to delete.
   * @returns An Observable that emits the deleted Person object.
   */
  deletePerson(id: number): Observable<Person> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Person>(url);
  }
}
