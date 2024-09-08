"use client"
import { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function Home() {
  const [depositAmount, setDepositAmount] = useState(10000);
  const [interestRate, setInterestRate] = useState(1.10);
  const [investmentTerm, setInvestmentTerm] = useState(36);
  const [interestPaid, setInterestPaid] = useState("atMaturity");
  const [finalBalance, setFinalBalance] = useState(10330);

  useEffect(() => {
    // formula for compound interest
    // A = P * (1 + r) ^ n
    let timeInPeriods = 0;
    let interestRateOnePeriod = 0;
  
    if (interestPaid === "monthly") {
      // calculate number of time in periods (n)
      timeInPeriods = investmentTerm;

      // calculate interest rate per period (r)
      interestRateOnePeriod = (interestRate / 12) / 100;
    } else if (interestPaid === "quarterly") {
      // calculate number of time in periods (n)
      timeInPeriods = investmentTerm / 3;

      // calculate interest rate per period (r)
      interestRateOnePeriod = (interestRate / 4) / 100;
    } else if (interestPaid === "annually") {
      // calculate number of time in periods (n)
      timeInPeriods = investmentTerm / 12;

      // calculate interest rate per period (r)
      interestRateOnePeriod = interestRate / 100;
    } else if (interestPaid === "atMaturity") {
      // only one period (n)
      timeInPeriods = 1;

      // calculate interest rate per period (r)
      interestRateOnePeriod = (interestRate / 100) * (investmentTerm / 12);
    }
  
    // calculate compound interest (A)
    const compoundInterest = depositAmount * Math.pow(1 + interestRateOnePeriod, timeInPeriods);
    setFinalBalance(Math.round(compoundInterest));
  }, [depositAmount, interestRate, investmentTerm, interestPaid]);

  const handleOnChangeDepositAmount = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = Number(e.currentTarget.value);
    setDepositAmount(newValue);
  }

  const handleOnChangeInterestRate = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = Number(e.currentTarget.value);
    setInterestRate(newValue);
  }

  const handleOnChangeInvestmentTerm = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = Number(e.currentTarget.value);
    if (newValue < 12 && interestPaid === "annually") {
      setInterestPaid("atMaturity");
    }
    setInvestmentTerm(newValue);
  }

  const handleOnChangeInterestPaid = (value: string) => {
    setInterestPaid(value);
  }

  const handleOnBlurDepositAmount = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = Number(e.currentTarget.value);
    if (newValue < 1000) {
      setDepositAmount(1000);
    } else if (newValue > 1500000) {
      setDepositAmount(1500000);
    } else {
      setDepositAmount(newValue);
    }
  }

  const handleOnBlurInterestRate = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = Number(e.currentTarget.value);
    if (newValue < 0) {
      setInterestRate(0);
    } else if (newValue > 15) {
      setInterestRate(15);
    } else {
      setInterestRate(newValue);
    }
  }

  const handleOnBlurInvestmentTerm = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = Number(e.currentTarget.value);
    if (newValue < 3) {
      setInvestmentTerm(3);
    } else if (newValue > 60) {
      setInvestmentTerm(60);
    } else {
      setInvestmentTerm(newValue);
    }
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-4 row-start-2 items-center sm:items-start">
        <header>
          Simple Term Deposit Calculator
        </header>
        <Label data-testid="depositAmount-label">
          Start deposit amount ($)
        </Label>
        <Input type="number" value={depositAmount} onChange={handleOnChangeDepositAmount} onBlur={handleOnBlurDepositAmount} data-testid="depositAmount-input"/>
        <Label data-testid="interestRate-label">
          Interest rate (% p.a)
        </Label>
        <Input type="number" value={interestRate} onChange={handleOnChangeInterestRate} onBlur={handleOnBlurInterestRate} data-testid="interestRate-input"/>
        <Label data-testid="investmentTerm-label">
          Investment term (months)
        </Label>
        <Input type="number" value={investmentTerm} onChange={handleOnChangeInvestmentTerm} onBlur={handleOnBlurInvestmentTerm} data-testid="investmentTerm-input"/>
        <Label data-testid="interestPaid-label">
          Interest paid
        </Label>
        <RadioGroup defaultValue={interestPaid} onValueChange={handleOnChangeInterestPaid} data-testid="interestPaid-radioGroup">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="monthly" id="r1" data-testid="monthly-radio"/>
            <Label htmlFor="r1" data-testid="monthly-label">
              Monthly
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="quarterly" id="r2" data-testid="quarterly-radio"/>
            <Label htmlFor="r2" data-testid="quarterly-label">
              Quarterly
            </Label>
          </div>
          { investmentTerm >= 12 ? (
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="annually" id="r3" data-testid="annually-radio"/>
              <Label htmlFor="r3" data-testid="annually-label">
                Annually
              </Label>
            </div>
            ) : ( undefined )}
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="atMaturity" id="r4" data-testid="atMaturity-radio"/>
            <Label htmlFor="r4" data-testid="atMaturity-label">
              At Maturity
            </Label>
          </div>
        </RadioGroup>
        <Label data-testid="finalBalance-label">
          Final balance ($)
        </Label>
        <Input disabled type="number" value={finalBalance} data-testid="finalBalance-input"/>
      </main>
    </div>
  );
}
