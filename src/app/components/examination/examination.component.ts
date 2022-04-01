import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';

export interface Question {
  color: string;
  question: string;
  answer: boolean;
  result?: boolean;
  title?: string;
  subtitle?: string;
}

@Component({
  selector: 'app-examination',
  templateUrl: './examination.component.html',
  styleUrls: ['./examination.component.css'],
})
export class ExaminationComponent implements OnInit {
  @ViewChild('question') current: Question | any;
  done = false;
  selected: Question;
  index = 0;
  totalSuccess = 0;
  questions: Question[] = [
    {
      color: '#FF0000',
      question: 'Is this the color red?',
      title: 'Level 1',
      subtitle: 'Tunning...',
      answer: true,
    },
    {
      color: '#00FF00',
      question: 'Is this the color green?',
      title: 'Level 1',
      subtitle: 'Tunning...',
      answer: true,
    },
    {
      color: '#0000FF',
      question: 'Is this the color blue?',
      title: 'Level 1',
      subtitle: 'Tunning...',
      answer: true,
    },
    {
      color: '#FFFF00',
      question: 'Is this the color Yello?',
      title: 'Level 1',
      subtitle: 'Tunning...',
      answer: true,
    },
    {
      color: '#FF00FF',
      question: 'Is this the color Purple?',
      title: 'Level 1',
      subtitle: 'Tunning...',
      answer: true,
    },
    {
      color: '#FF6000',
      question: 'Is this the color Orange?',
      title: 'Level 1',
      subtitle: 'Tunning...',
      answer: true,
    },

    {
      color: '#FF6060',
      question: 'Is this the color red?',
      title: 'Level 4',
      subtitle: 'Tunning...',
      answer: true,
    },
    {
      color: '#60FF60',
      question: 'Is this the color green?',
      title: 'Level 4',
      subtitle: 'Tunning...',
      answer: true,
    },
    {
      color: '#6060FF',
      question: 'Is this the color blue?',
      title: 'Level 4',
      subtitle: 'Tunning...',
      answer: true,
    },

    {
      color: '#FF4040',
      question: 'Is this the color red?',
      title: 'Level 3',
      subtitle: 'Tunning...',
      answer: true,
    },
    {
      color: '#40FF40',
      question: 'Is this the color green?',
      title: 'Level 3',
      subtitle: 'Tunning...',
      answer: true,
    },
    {
      color: '#4040FF',
      question: 'Is this the color blue?',
      title: 'Level 3',
      subtitle: 'Tunning...',
      answer: true,
    },
  ];

  constructor() {
    this.selected = this.questions[this.index];
  }

  ngOnInit(): void {}
  startNew(event: Event) {
    this.done = false;
    this.totalSuccess = this.index = 0;
    this.selected = this.questions[this.index];
  }

  onAnswer(event: Event, yes: boolean) {
    this.selected.result = this.selected.answer === yes;
    this.totalSuccess = this.questions.filter((q) => q.result === true)?.length;
    this.nextQuestion();
  }

  private nextQuestion() {
    if (this.index < this.questions.length - 1) {
      this.index++;
      this.selected = this.questions[this.index];
    } else {
      this.done = true;
    }
  }
}
