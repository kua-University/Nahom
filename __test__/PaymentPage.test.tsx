import{ render,screen } from'@testing-library/react'
import PaymentPage from '@/app/page'

describe('PaymentPage', () =>{
    it('should have Name text', () => {
        render(<PaymentPage />) // arrange
    
        const myElem = screen.getByText('Name') // act
    
        expect(myElem).toBeInTheDocument()// assert
    
    })

    it('should have a heading   ', () => {
        render(<PaymentPage />) // arrange
    
        const myElem = screen.getByRole('heading' ,{
            name:'Student Registration'
        }) // act
    
        expect(myElem).toBeInTheDocument()// assert
    
    })
    it('should have a heading   ', () => {
        render(<PaymentPage />) // arrange
    
        const myElem = screen.getByRole('heading' ,{
            name:'Student Registration'
        }) // act
    
        expect(myElem).toBeInTheDocument()// assert
    
    })
    

    it('should contain the  text "email" ', () => {
        render(<PaymentPage />) // arrange
    
        const myElem = screen.getByText(/email/i) // act
    
        expect(myElem).toBeInTheDocument()// assert
    
    })

    
    
    })
    


   
    
    test('should contain the text "Student ID"', () => {
        render(<PaymentPage />); // Arrange
    
        const myElem = screen.getByText(/Student ID/i); // Act
        expect(myElem).toBeInTheDocument(); // Assert
    });
    
    test('should contain an input for studentId', () => {
        render(<PaymentPage />); // Arrange
    
        const inputElem = screen.getByPlaceholderText(/Enter your student ID/i); // Act
        expect(inputElem).toBeInTheDocument(); // Assert
    });

