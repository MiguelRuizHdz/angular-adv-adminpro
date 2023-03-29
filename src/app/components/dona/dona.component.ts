import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {

  @Input() title: string = 'Sin título';

  public colors: Color[] = [
    '#6857E6', '#009FEE', '#F02059'
  ];

  // Doughnut
  @Input('labels') doughnutChartLabels: string[] = ['Label1', 'Label2', 'Label3'];
  @Input('data') data: number[] = [350, 450, 100];

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: this.data,
        backgroundColor: this.colors
      },
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';

  ngOnInit(): void {
    this.doughnutChartData = {
      labels: this.doughnutChartLabels,
      datasets:
        [
          {
            data: this.data,
            backgroundColor: this.colors
          }
        ]
    };
  }

}
