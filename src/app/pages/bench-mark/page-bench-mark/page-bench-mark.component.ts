import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BenchMarkEntity } from 'src/app/models/bench-mark.entity';
import { BenchMarkService } from 'src/app/services/bench-mark.service';

@Component({
  selector: 'app-page-bench-mark',
  templateUrl: './page-bench-mark.component.html',
  styleUrls: ['./page-bench-mark.component.css']
})
export class PageBenchMarkComponent {


  displayedColumns: string[] = ['id', 'code', 'name', 'location', 'cota', 'latitude', 'length', 'edit'];
  dataSource!: BenchMarkEntity[];

  constructor(private service: BenchMarkService) {
    this.service.listAll().subscribe({
      next: (lista) => {
        this.dataSource = lista;
        console.log(lista)
      },
    })
  }

}
