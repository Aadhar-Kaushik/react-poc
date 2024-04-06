import { fireEvent, render } from "@testing-library/react";
import TestWithJest from "./TestWithJest";

describe(TestWithJest, () => {
    it("counter displays initial count", () => {
        const { getByTestId } = render(<TestWithJest initialCount={0} />)

        const countVal = +getByTestId("id-counter").textContent

        expect(countVal).toEqual(0)
    })

    it("if count increases by one when clicked on Increment button",()=>{
        const{getByTestId,getByRole}= render(<TestWithJest initialCount={0}/>)
        const countVal1=+getByTestId("id-counter").textContent
        const incrementButton = getByRole("button",{name:"Increment"})
        expect(countVal1).toEqual(0)
        fireEvent.click(incrementButton)
        const countVal2=+getByTestId("id-counter").textContent
        expect(countVal2).toEqual(1)
    })

    it("if count decreases by one when clicked on Decrement button",()=>{
        const {getByTestId,getByRole}=render(<TestWithJest initialCount={0}/>)

        const countVal1=+getByTestId("id-counter").textContent
        expect(countVal1).toEqual(0)
        fireEvent.click(getByRole("button",{name:"Decrement"}))
        const countVal2=+getByTestId("id-counter").textContent
        expect(countVal2).toEqual(-1)
    })
    it("if count reset to 0 when clicked on Reset button",()=>{
        const {getByTestId,getByRole}=render(<TestWithJest initialCount={5}/>)
        const countVal1=+getByTestId("id-counter").textContent
        expect(countVal1).toEqual(5)
        fireEvent.click(getByRole("button",{name:"Reset"}))
        const countVal2=+getByTestId("id-counter").textContent
        expect(countVal2).toEqual(0)
    })

    it("if count change sign when clicked on Switch Sign  button",()=>{
        const {getByTestId,getByRole}=render(<TestWithJest initialCount={15}/>)
        const countVal1=+getByTestId("id-counter").textContent
        expect(countVal1).toEqual(15)
        fireEvent.click(getByRole("button",{name:"Switch Sign"}))
        const countVal2=+getByTestId("id-counter").textContent
        expect(countVal2).toEqual(-15)
        
    })
})