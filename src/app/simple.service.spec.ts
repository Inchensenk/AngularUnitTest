import { TestBed } from "@angular/core/testing";
import { CheckValueService } from "./check-value.service";
import { SimpleService } from "./simple.service";

describe('Простой сервис', () =>{

  let service: SimpleService;

  const fakeCheckValueService = {check: () => true};

  beforeEach(()=>{
    TestBed.configureTestingModule({
      providers: [
        SimpleService,
        {provide: CheckValueService, useValue:fakeCheckValueService}//mock
      ]
     })
     service = TestBed.inject(SimpleService);
  })

  it('должен создавать экземпляр класса', ()=>{
    expect(service).toBeTruthy();
  });

  it('Должен суммировать два числа', ()=>{
    const sum = service.sum(1,5);
    expect(sum).toBe(6)
  });

  it('должен возвращать undefined, если второго аргумента нет', ()=>{
    const sum = service.sum(5);
    expect(sum).toBeUndefined();
  });

    it('должен проверять значение', ()=>{
      const value = service.check();
      expect(value).toBeTruthy();
  });

    it('должен вернуть 21, если первого аргумента нет', ()=>{
      const sum = service.sum(10-10, 1);
      expect(sum).toBe(21);
  });
} );
