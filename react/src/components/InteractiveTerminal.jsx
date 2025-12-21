import React, { useState, useRef, useEffect} from "react";

export default function InteractiveTerminal(){
    //State for the user input and the terminal history
    const[input, setInput] = useState('');
    const[history, setHistory] = useState([
        {type:'output', content: 'gcloud: SDK 452.0.0' },
        {type: 'output', content: 'System status: ACTIVE' },
        {type: 'output', content: 'Welcome! type "help" to see available commands.'},
    ]);

    //reference for auto-scroll in the final line of the terminal
    const bottomRef = useRef(null);
    
    //function that proceses the commands
    const handleCommand = (cmd) => {
        const cleanCmd = cmd.trim().toLowerCase();
    let output = '';

    switch (cleanCmd){
        case 'help':
            output = 'Available commands:\n - myinfo-whoiam: Display user info\n - skills: List technical skills\n -clear: Clear terminal history\n -contact: Show contact info';
            break;
        case 'whoiam':
        case 'myinfo:':
            output = 'user: Cloud Engineer Trainee\n role: Support\n location: us-east1-b';
            break;
        case 'skills':
            output = 'Fetching skills...\n [Compute]: GCE, Cloud Functions\n [Networking]: VPC, Load Balancing\n [IaC]: Terraform';
            break;
        case 'contact':
            output = 'Email: eliotg89@gmail.com\n Github: https://github.com/Seven-99\n LinkedIn: https://ar.linkedin.com/in/eliot-francisco-gutierrez-16927a2a8' ;
            break;
        case '':
            output = '';
            break;
        default:
            output = `Command not found "${cmd}". Type "help" for assistance.`;
    };
    return output
    };

// Form send (Enter)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return; // Doesn't process empty commands

    const newHistory = [...history, { type: 'command', content: input }];
    
    if (input.trim().toLowerCase() === 'clear') {
      setHistory([]);
    } else {
      const output = handleCommand(input);
      if (output) {
        newHistory.push({ type: 'output', content: output });
      }
      setHistory(newHistory);
    }
    setInput(''); // Clear input
  };

  // Scroll effect history
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  return (
    <div className="bg-[#1e1e1e] rounded-xl p-5 shadow-2xl font-mono text-[13px]
     border border-slate-700 w-full max-w-lg h-100 overflow-y-auto flex flex-col no-scrollbar">
      {/* Buttons MAC style  */}
      <div className="flex gap-2 mb-4 sticky top-0 bg-[#1e1e1e] pt-1 z-10 w-full">
        <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
        <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
      </div>
      
      {/* content area that grows */}
      <div className="flex-1 pb-2 space-y-2">
        {history.map((line, index) => (
          <div key={index} className={`${line.type === 'command' ? '' : 'text-white/80'} whitespace-pre-wrap`}>
            {line.type === 'command' ? (
              <span><span className="text-[#5af78e]">user@cloud-engineer:</span><span className="text-white">~# {line.content}</span></span>
            ) : (
              line.content
            )}
          </div>
        ))}
        
        {/* Input line active */}
        <form onSubmit={handleSubmit} className="flex items-center gap-1 mt-2">
          <span className="text-[#5af78e] shrink-0">user@cloud-engineer:</span>
          <span className="text-white shrink-0">~#</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="bg-transparent border-none outline-none text-white w-full caret-[#5af78e] font-mono p-0 ml-1 focus:ring-0"
            autoFocus
            spellCheck="false"
            autoComplete="off"
          />
        </form>
        {/*  auto-scroll element not visible */}
      </div>
    </div>
  );
}