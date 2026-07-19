import { Component } from '@angular/core';
import {InvestmentHero} from './components/investment-hero/investment-hero';
import {InvestmentSectorsComponent} from './components/investment-sectors/investment-sectors';
import {InvestmentCta} from './components/investment-cta/investment-cta';
@Component({
  selector: 'app-investments',
  imports: [InvestmentHero, InvestmentSectorsComponent, InvestmentCta],
  templateUrl: './investments.html',
  styleUrl: './investments.css',
})
export class Investments {}
