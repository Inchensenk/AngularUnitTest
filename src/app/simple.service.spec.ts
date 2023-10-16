import { CheckValueService } from "./check-value.service";
import { SimpleService } from "./simple.service";

describe('Простой сервис', () =>{

  let service: SimpleService;

  const fakeCheckValueService = {check: () => true};

  beforeEach(()=>{
    service = new SimpleService(fakeCheckValueService as CheckValueService);
  })

  it('должен создавать экземпляр класса', ()=>{
    expect(service).toBeTruthy();
  });

  it('Должен суммировать два числа', ()=>{
    const sum = service.sum(1,5);
    expect(sum).toBe(6)
  })

  it('должен возвращать undefined, если второго аргумента нет', ()=>{
    const sum = service.sum(5);
    expect(sum).toBeUndefined();
  })
} );
