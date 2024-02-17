import GeneratedWords from "../components/GeneratedWords";
import RestartButton from "../components/RestartButton";
import Results from "../components/Results";
import UserTypings from "../components/UserTypings";
import useEngine from "../hooks/useEngine";
import { calculateAccuracyPercentage } from "../utils/helpers";

const Home = ({ time }: { time: number }) => {
    const { words, typed, timeLeft, errors, state, restart, totalTyped } = useEngine(time);

    return (
        <>
            <h1 className=" text-slate-200 text-4xl absolute top-20 font-mono font-semibold tracking-wider left-[32%] underline">Test Your Typing Speed</h1>
            <CountdownTimer timeLeft={timeLeft} />
            <div className="border-gray-400 border-2 p-5 shadow-2xl shadow-blue-500/20">
                <WordsContainer>
                    <GeneratedWords key={words} words={words} />
                    {/* User typed characters will be overlayed over the generated words */}
                    <UserTypings
                        className="absolute inset-0"
                        words={words}
                        userInput={typed}
                    />
                </WordsContainer>
            </div>
            <RestartButton
                className={"mx-auto mt-10 text-slate-500"}
                onRestart={restart}
            />
            <div className="mt-10 flex justify-center">
                <Results
                    className="border-2 border-gray-600 p-4"
                    state={state}
                    errors={errors}
                    accuracyPercentage={calculateAccuracyPercentage(errors, totalTyped)}
                    total={totalTyped}
                    time={time}
                />
            </div>
        </>
    )
}


const WordsContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="relative text-3xl max-w-3xl leading-relaxed break-all mt-3">
            {children}
        </div>
    );
};

const CountdownTimer = ({ timeLeft }: { timeLeft: number }) => {
    return <h2 className="text-primary-400 font-medium">Time: {timeLeft}</h2>;
};

export default Home