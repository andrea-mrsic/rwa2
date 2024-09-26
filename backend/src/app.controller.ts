import { Controller, Get } from '@nestjs/common';

@Controller('api')
export class AppController {
  @Get('home')
  getHome() {
    return { title: 'Dobrodošli u našu teretanu', description: 'Najbolja usluga za vaše fitness ciljeve.' };
  }

  @Get('services')
  getServices() {
    return [
      { name: 'Personalni trening', description: 'Individualni trening prilagođen vašim ciljevima.' },
      { name: 'Grupni treninzi', description: 'Grupni treninzi za sve razine spremnosti.' },
    ];
  }

  @Get('contact')
  getContact() {
    return { email: 'info@teretana.com', phone: '+38512345678' };
  }
}
