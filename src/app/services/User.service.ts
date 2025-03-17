import { inject, Injectable, signal } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

export enum Role {
  EMPLOYEE = 'Employee',
  MANAGER = 'Manager',
  HR = 'Hr',
  TRAVEL_DESK = 'Travel Desk',
}

export interface StudentProfile {
  id: string;
  degree: string;
  university: string;
  graduationYear: number;
  cgpa: number;
  skills: string[];
}

export interface CompanyProfile {
  id: string;
  name: string;
  industry: string;
  contactMail: string;
}

export interface User {
  id: string;
  username: string;
  email: string;
  password: string;
  role: Role;
}

export function uuidv4() {
  return '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, (c) =>
    (
      +c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (+c / 4)))
    ).toString(16)
  );
}

@Injectable({ providedIn: 'root' })
export class UserService {
  private toastr = inject(ToastrService);
  private users = signal<User[]>([
    {
      id: uuidv4(),
      username: 'Suresh',
      email: 'suresh@gmail.com',
      password: 'suresh',
      role: Role.MANAGER,
    },
    {
      id: uuidv4(),
      username: 'sai',
      email: 'sai@gmail.com',
      password: 'saisai',
      role: Role.MANAGER,
    },
    {
      id: uuidv4(),
      username: 'swarupa',
      email: 'swarupa@gmail.com',
      password: 'swarupa',
      role: Role.HR,
    },
    {
      id: uuidv4(),
      username: 'venkat',
      email: 'venkat@gmail.com',
      password: 'venkat',
      role: Role.EMPLOYEE,
    },
    {
      id: uuidv4(),
      username: 'kavya',
      email: 'kavya@gmail.com',
      password: 'kavyaa',
      role: Role.TRAVEL_DESK,
    },
  ]);
  private user = signal<User | null>(null);
  currentUser = this.user.asReadonly();
  currentUsers = this.users.asReadonly();

  login(email: string, password: string) {
    let user =
      this.users().find(
        (user) => user.email === email && user.password === password
      ) ?? null;
    if (user) {
      this.user.set(user);
      this.toastr.success('Login Successful', 'Message');
      return true;
    } else {
      this.toastr.error('Invalid Username / Password!', 'Message');
      return false;
    }
  }

  register(username: string, email: string, password: string) {
    const user = this.users().find((user) => user.email === email) ?? null;
    if (user === null) {
      let newUser = {
        id: uuidv4(),
        username,
        email,
        password,
        role: Role.EMPLOYEE,
      };
      this.users.update((users) => [...users, newUser]);
      return true;
    } else {
      this.toastr.warning('User Already Registered!', 'Message');
      return false;
    }
  }

  logout() {
    this.user.set(null);
    this.toastr.success('User Logged out successfully', 'Message');
  }
}
