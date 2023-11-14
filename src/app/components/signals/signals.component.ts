import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signals.component.html',
})
export class SignalsComponent {
  user = signal<User>({ name: '', lastName: '', age: 0, city: '' });

  //Calculator
  number1 = signal<number>(0);
  number2 = signal<number>(0);
  operator = signal<string>('+');
  result = computed(() => eval(`${this.number1()} ${this.operator()} ${this.number2()}`))

  updateUser({ target }: any) {
    const { name, value } = target;

    this.user.update((user: any) => {
      user[name] = value;
      return user;
    })
  }

  updateNumber1(event: Event) {
    const input = event.target as HTMLInputElement;
    this.number1.set(Number(input.value));
  }

  updateNumber2(event: Event) {
    const input = event.target as HTMLInputElement;
    this.number2.set(Number(input.value));
  }

  updateOperator(event: Event) {
    const input = event.target as HTMLInputElement;
    this.operator.set(input.value);
  }

}


interface User {
  name: string;
  lastName: string;
  age?: number;
  city: string;
}