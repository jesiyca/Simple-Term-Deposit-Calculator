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
    // A = P * (1 + r)^n

    //setFinalBalance();
  }, [depositAmount, interestRate, investmentTerm, interestPaid])

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
    setInvestmentTerm(newValue);
  }

  const handleOnChangeInterestPaid = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    setInterestPaid(newValue);
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
        <header>Simple Term Deposit Calculator</header>
        <Label>Start deposit amount ($)</Label>
        <Input type="number" min="1000" max="1500000" value={depositAmount} onChange={handleOnChangeDepositAmount} onBlur={handleOnBlurDepositAmount}/>
        <Label>Interest rate (% p.a)</Label>
        <Input type="number" min="0" max="15" value={interestRate} onChange={handleOnChangeInterestRate} onBlur={handleOnBlurInterestRate}/>
        <Label>Investment term (months)</Label>
        <Input type="number" min="3" max="60" value={investmentTerm} onChange={handleOnChangeInvestmentTerm} onBlur={handleOnBlurInvestmentTerm}/>
        <Label>Interest paid</Label>
        <RadioGroup defaultValue={interestPaid} onChange={handleOnChangeInterestPaid}>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="monthly" id="r1" />
            <Label htmlFor="r1">Monthly</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="quarterly" id="r2" />
            <Label htmlFor="r2">Quarterly</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="annually" id="r3" />
            <Label htmlFor="r3">Annually</Label>
            </div>
            <div className="flex items-center space-x-2">
            <RadioGroupItem value="atMaturity" id="r4" />
            <Label htmlFor="r4">At Maturity</Label>
            </div>
        </RadioGroup>
        
        <Label>Final balance ($)</Label>
            <Input disabled type="number" value={finalBalance}/>
      </main>
    </div>
  );
}
