import React, { forwardRef, useEffect, useImperativeHandle } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Step, Stepper } from "@mui/material";

interface RefType {
    onBack?: () => void;
    onNext?: () => void;
}

interface StepperProps {
    steps: { id: number; label: string }[];
    width?: string;
    backgroundColor?: string;
    currentStep: number;
    selectedStepperInnerPaddingTop?: string;
    selectedStepperInnerPaddingBottom?: string;

}

type DivProps = {
    indexValue: number;
  };
  

export const KpStepper = forwardRef<RefType, StepperProps>(
    ({ steps, width, backgroundColor, currentStep, selectedStepperInnerPaddingTop, selectedStepperInnerPaddingBottom, ...props }, ref) => {
        const StepperUnselect = styled("div")<DivProps>(({ theme, indexValue }) => ({
            height: "25px",
            width: "25px",
            backgroundColor: indexValue < currentStep  ? backgroundColor : '#fff',
            border: indexValue < currentStep  ? backgroundColor : '1px solid #C1C4CD',
            color: indexValue < currentStep ? '#fff' : "#C1C4CD",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            fontFamily: "Inter",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "21px",
            opacity: backgroundColor === null ? 0.5 : 1,
            
        }));

        const StepperSelect = styled("div")(({ theme }) => ({
            border: "1px solid #1E2332",
            borderRadius: "30px",
            padding: "0.5rem",
            fontFamily: "Inter",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "21px",
            paddingLeft: "10px",
            paddingRight: "10px",
            paddingTop: selectedStepperInnerPaddingTop,
            paddingBottom: selectedStepperInnerPaddingBottom,
        }));

        const SpanSelect = styled("span")(({ theme }) => ({
            fontFamily: "Inter",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "21px",
            marginRight: "20xp",
            paddingRight: "12px",
          
        }));

        const StepperComponent = styled(Box)(({ theme }) => ({
            width: width,
        }));

        // Define state variables for the active step and completed steps
        const [activeStep, setActiveStep] = React.useState(0);
        const [completed, setCompleted] = React.useState<{
            [key: number]: boolean;
        }>({});

        // Function to handle going back to the previous step
        const onBack = () => {
            if (activeStep !== 0) {
                handleBack();
            }
        };

        // Function to handle going to the next step
        const onNext = () => {
            handleNext();
        };

        // Expose onBack and onNext functions to the parent component using useImperativeHandle
        useImperativeHandle(ref, () => ({ onBack, onNext }));

        // Function to get the total number of steps
        const totalSteps = () => {
            return steps.length;
        };

        // Function to get the number of completed steps
        const completedSteps = () => {
            return Object.keys(completed).length;
        };

        // Function to check if the current step is the last step
        const isLastStep = () => {
            return activeStep === totalSteps() - 1;
        };

        // Function to check if all steps are completed
        const allStepsCompleted = () => {
            return completedSteps() === totalSteps();
        };

        // Function to handle going to the next step
        const handleNext = () => {
            const newActiveStep =
                isLastStep() && !allStepsCompleted()
                    ? steps.findIndex((step, i) => !(i in completed))
                    : activeStep + 1;
            setActiveStep(newActiveStep);
        };

        // Function to handle going back to the previous step
        const handleBack = () => {
            setActiveStep((prevActiveStep) => prevActiveStep - 1);
        };

        // Function to handle clicking on a specific step
        const handleStep = (step: React.SetStateAction<number>) => () => {
            setActiveStep(step);
        };

        return (
            // Render the stepper component
            <StepperComponent>
                <Stepper
                    nonLinear
                    activeStep={currentStep === undefined ? activeStep : currentStep}
                >
                    {steps.map((step, index) => (
                        <Step sx={{paddingRight:'0px', paddingLeft:'0px'}} key={step.label} completed={completed[index]}>
                            {currentStep === undefined ? (
                                activeStep
                            ) : currentStep !== index ? (
                                <StepperUnselect indexValue={index} onClick={() => handleStep(index)}>
                                    {index + 1}
                                </StepperUnselect>
                            ) : (
                                <StepperSelect onClick={handleStep(index)}>
                                    <SpanSelect>{index + 1}</SpanSelect>{step.label}
                                </StepperSelect>
                            )}
                        </Step>
                    ))}
                </Stepper>
            </StepperComponent>
        );
    },
);

