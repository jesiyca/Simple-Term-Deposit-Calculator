import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import Page from '../page'
 
describe("Home page", () => {
  it('should match snapshot', () => {
    const { container } = render(<Page />);

    expect(container).toMatchSnapshot();
  }); 
  it('should render calculator defaults successfully', () => {
    render(<Page />);

    expect(screen.getByTestId('depositAmount-input')).toHaveDisplayValue("10000");
    expect(screen.getByTestId('interestRate-input')).toHaveDisplayValue("1.1");
    expect(screen.getByTestId('investmentTerm-input')).toHaveDisplayValue("36");
    expect(screen.getByTestId('atMaturity-radio')).toBeChecked();
    expect(screen.getByTestId('finalBalance-input')).toHaveDisplayValue("10330");
  }); 

  it('should successfully change deposit amount', () => {
    render(<Page />);

    fireEvent.change(screen.getByTestId('depositAmount-input'), { target: { value: "5000"}});

    expect(screen.getByTestId('depositAmount-input')).toHaveDisplayValue("5000");
    expect(screen.getByTestId('interestRate-input')).toHaveDisplayValue("1.1");
    expect(screen.getByTestId('investmentTerm-input')).toHaveDisplayValue("36");
    expect(screen.getByTestId('atMaturity-radio')).toBeChecked();
    expect(screen.getByTestId('finalBalance-input')).toHaveDisplayValue("5165");
  }); 

  it('should successfully change deposit amount under minimum', () => {
    render(<Page />);

    fireEvent.change(screen.getByTestId('depositAmount-input'), { target: { value: "2"}});
    fireEvent.blur(screen.getByTestId('depositAmount-input'));

    expect(screen.getByTestId('depositAmount-input')).toHaveDisplayValue("1000");
    expect(screen.getByTestId('interestRate-input')).toHaveDisplayValue("1.1");
    expect(screen.getByTestId('investmentTerm-input')).toHaveDisplayValue("36");
    expect(screen.getByTestId('atMaturity-radio')).toBeChecked();
    expect(screen.getByTestId('finalBalance-input')).toHaveDisplayValue("1033");
  }); 

  it('should successfully change deposit amount over maximum', () => {
    render(<Page />);

    fireEvent.change(screen.getByTestId('depositAmount-input'), { target: { value: "99999999"}});
    fireEvent.blur(screen.getByTestId('depositAmount-input'));

    expect(screen.getByTestId('depositAmount-input')).toHaveDisplayValue("1500000");
    expect(screen.getByTestId('interestRate-input')).toHaveDisplayValue("1.1");
    expect(screen.getByTestId('investmentTerm-input')).toHaveDisplayValue("36");
    expect(screen.getByTestId('atMaturity-radio')).toBeChecked();
    expect(screen.getByTestId('finalBalance-input')).toHaveDisplayValue("1549500");
  }); 

  it('should successfully change interest rate amount', () => {
    render(<Page />);

    fireEvent.change(screen.getByTestId('interestRate-input'), { target: { value: "7.5"}});

    expect(screen.getByTestId('depositAmount-input')).toHaveDisplayValue("10000");
    expect(screen.getByTestId('interestRate-input')).toHaveDisplayValue("7.5");
    expect(screen.getByTestId('investmentTerm-input')).toHaveDisplayValue("36");
    expect(screen.getByTestId('atMaturity-radio')).toBeChecked();
    expect(screen.getByTestId('finalBalance-input')).toHaveDisplayValue("12250");
  }); 

  it('should successfully change interest rate amount over maximum', () => {
    render(<Page />);

    fireEvent.change(screen.getByTestId('interestRate-input'), { target: { value: "30"}});
    fireEvent.blur(screen.getByTestId('interestRate-input'));

    expect(screen.getByTestId('depositAmount-input')).toHaveDisplayValue("10000");
    expect(screen.getByTestId('interestRate-input')).toHaveDisplayValue("15");
    expect(screen.getByTestId('investmentTerm-input')).toHaveDisplayValue("36");
    expect(screen.getByTestId('atMaturity-radio')).toBeChecked();
    expect(screen.getByTestId('finalBalance-input')).toHaveDisplayValue("14500");
  }); 

  it('should successfully change interest rate amount under minimum', () => {
    render(<Page />);

    fireEvent.change(screen.getByTestId('interestRate-input'), { target: { value: "-0.1"}});
    fireEvent.blur(screen.getByTestId('interestRate-input'));

    expect(screen.getByTestId('depositAmount-input')).toHaveDisplayValue("10000");
    expect(screen.getByTestId('interestRate-input')).toHaveDisplayValue("0");
    expect(screen.getByTestId('investmentTerm-input')).toHaveDisplayValue("36");
    expect(screen.getByTestId('atMaturity-radio')).toBeChecked();
    expect(screen.getByTestId('finalBalance-input')).toHaveDisplayValue("10000");
  }); 

  it('should successfully change investment term', () => {
    render(<Page />);

    fireEvent.change(screen.getByTestId('investmentTerm-input'), { target: { value: "12"}});

    expect(screen.getByTestId('depositAmount-input')).toHaveDisplayValue("10000");
    expect(screen.getByTestId('interestRate-input')).toHaveDisplayValue("1.1");
    expect(screen.getByTestId('investmentTerm-input')).toHaveDisplayValue("12");
    expect(screen.getByTestId('atMaturity-radio')).toBeChecked();
    expect(screen.getByTestId('finalBalance-input')).toHaveDisplayValue("10110");
  }); 

  it('should successfully change investment term over maximum', () => {
    render(<Page />);

    fireEvent.change(screen.getByTestId('investmentTerm-input'), { target: { value: "100"}});
    fireEvent.blur(screen.getByTestId('investmentTerm-input'));

    expect(screen.getByTestId('depositAmount-input')).toHaveDisplayValue("10000");
    expect(screen.getByTestId('interestRate-input')).toHaveDisplayValue("1.1");
    expect(screen.getByTestId('investmentTerm-input')).toHaveDisplayValue("60");
    expect(screen.getByTestId('atMaturity-radio')).toBeChecked();
    expect(screen.getByTestId('finalBalance-input')).toHaveDisplayValue("10550");
  }); 

  it('should successfully change investment term under minimum', () => {
    render(<Page />);

    fireEvent.change(screen.getByTestId('investmentTerm-input'), { target: { value: "1"}});
    fireEvent.blur(screen.getByTestId('investmentTerm-input'));

    expect(screen.getByTestId('depositAmount-input')).toHaveDisplayValue("10000");
    expect(screen.getByTestId('interestRate-input')).toHaveDisplayValue("1.1");
    expect(screen.getByTestId('investmentTerm-input')).toHaveDisplayValue("3");
    expect(screen.getByTestId('atMaturity-radio')).toBeChecked();
    expect(screen.getByTestId('finalBalance-input')).toHaveDisplayValue("10028");
  }); 

  it('should successfully select monthly radio item', () => {
    render(<Page />);

    fireEvent.click(screen.getByTestId('monthly-radio'));

    expect(screen.getByTestId('depositAmount-input')).toHaveDisplayValue("10000");
    expect(screen.getByTestId('interestRate-input')).toHaveDisplayValue("1.1");
    expect(screen.getByTestId('investmentTerm-input')).toHaveDisplayValue("36");
    expect(screen.getByTestId('monthly-radio')).toBeChecked();
    expect(screen.getByTestId('finalBalance-input')).toHaveDisplayValue("10335");
  }); 

  it('should successfully select quarterly radio item', () => {
    render(<Page />);

    fireEvent.click(screen.getByTestId('quarterly-radio'));

    expect(screen.getByTestId('depositAmount-input')).toHaveDisplayValue("10000");
    expect(screen.getByTestId('interestRate-input')).toHaveDisplayValue("1.1");
    expect(screen.getByTestId('investmentTerm-input')).toHaveDisplayValue("36");
    expect(screen.getByTestId('quarterly-radio')).toBeChecked();
    expect(screen.getByTestId('finalBalance-input')).toHaveDisplayValue("10335");
  }); 

  it('should successfully select annually radio item', () => {
    render(<Page />);

    fireEvent.click(screen.getByTestId('annually-radio'));

    expect(screen.getByTestId('depositAmount-input')).toHaveDisplayValue("10000");
    expect(screen.getByTestId('interestRate-input')).toHaveDisplayValue("1.1");
    expect(screen.getByTestId('investmentTerm-input')).toHaveDisplayValue("36");
    expect(screen.getByTestId('annually-radio')).toBeChecked();
    expect(screen.getByTestId('finalBalance-input')).toHaveDisplayValue("10334");
  });

  it('should successfully show deposit table', () => {
    render(<Page />);

    fireEvent.click(screen.getByTestId('monthly-radio'));

    expect(screen.getByTestId('depositAmount-input')).toHaveDisplayValue("10000");
    expect(screen.getByTestId('interestRate-input')).toHaveDisplayValue("1.1");
    expect(screen.getByTestId('investmentTerm-input')).toHaveDisplayValue("36");
    expect(screen.getByTestId('monthly-radio')).toBeChecked();
    expect(screen.getByTestId('finalBalance-input')).toHaveDisplayValue("10335");
    expect(screen.getByTestId('depositTable')).toBeInTheDocument();
  });
});