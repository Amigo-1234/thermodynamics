const questions = [
    {
      question: "What is the First Law of Thermodynamics?",
      options: [
        "Entropy increases",
        "Energy is conserved",
        "No heat transfer",
        "The temperature is constant"
      ],
      correct: 1,
      explanation: "The First Law states that energy cannot be created or destroyed — only transformed. It's about conservation of energy."
    },
    {
      question: "An adiabatic process occurs with:",
      options: [
        "Constant pressure",
        "No heat exchange",
        "Constant temperature",
        "Maximum entropy"
      ],
      correct: 1,
      explanation: "Adiabatic means no heat is transferred into or out of the system."
    },
    {
      question: "In an isothermal process, what remains constant?",
      options: [
        "Pressure",
        "Volume",
        "Temperature",
        "Entropy"
      ],
      correct: 2,
      explanation: "Isothermal processes occur at constant temperature."
    },
    {
      question: "Which law introduces the concept of entropy?",
      options: [
        "First Law",
        "Second Law",
        "Third Law",
        "Zeroth Law"
      ],
      correct: 1,
      explanation: "The Second Law introduces entropy, stating that total entropy can never decrease in an isolated system."
    },
    {
      question: "A Carnot engine is most efficient when:",
      options: [
        "It has high pressure",
        "There is no friction",
        "It operates between two large temperature differences",
        "It uses real gases"
      ],
      correct: 2,
      explanation: "The efficiency of a Carnot engine depends on the temperature difference between the heat source and sink."
    },
    {
      question: "What is the SI unit of heat?",
      options: [
        "Kelvin",
        "Watt",
        "Joule",
        "Calorie"
      ],
      correct: 2,
      explanation: "The SI unit of heat is Joule (J), although calorie is also used in some contexts."
    },
    {
      question: "The Zeroth Law of Thermodynamics deals with:",
      options: [
        "Energy conservation",
        "Entropy",
        "Thermal equilibrium",
        "Adiabatic expansion"
      ],
      correct: 2,
      explanation: "The Zeroth Law explains that if two systems are in thermal equilibrium with a third, they are in equilibrium with each other."
    },
    {
      question: "Which of the following is a path function?",
      options: [
        "Temperature",
        "Heat",
        "Entropy",
        "Internal energy"
      ],
      correct: 1,
      explanation: "Heat is a path function — its value depends on the path taken, not just the initial and final states."
    },
    {
      question: "During an isochoric process, what remains constant?",
      options: [
        "Volume",
        "Pressure",
        "Temperature",
        "Work"
      ],
      correct: 0,
      explanation: "Isochoric means constant volume, so no work is done."
    },
    {
      question: "In an ideal gas, internal energy depends only on:",
      options: [
        "Volume",
        "Pressure",
        "Temperature",
        "Entropy"
      ],
      correct: 2,
      explanation: "For an ideal gas, internal energy is directly related to temperature."
    }
  ];
  questions.push(
    {
      question: "What is the efficiency formula for a Carnot engine?",
      options: [
        "1 - (T₁/T₂)",
        "1 + (T₁/T₂)",
        "T₂ - T₁",
        "T₁/T₂"
      ],
      correct: 0,
      explanation: "Efficiency (η) = 1 - (T_cold / T_hot), where temperatures are in Kelvin."
    },
    {
      question: "Which of the following quantities is always conserved?",
      options: [
        "Entropy",
        "Heat",
        "Work",
        "Energy"
      ],
      correct: 3,
      explanation: "According to the First Law, energy is conserved in all processes."
    },
    {
      question: "A gas expands adiabatically. What happens to its temperature?",
      options: [
        "It increases",
        "It remains constant",
        "It decreases",
        "It becomes zero"
      ],
      correct: 2,
      explanation: "In adiabatic expansion, no heat is added, so the gas does work and loses internal energy, reducing temperature."
    },
    {
      question: "Which of these is NOT a thermodynamic process?",
      options: [
        "Isobaric",
        "Isochoric",
        "Isometric",
        "Isothermal"
      ],
      correct: 2,
      explanation: "Isometric is not a recognized thermodynamic process; the correct term is isochoric (constant volume)."
    },
    {
      question: "If Q = 100 J and W = 60 J, what is ΔU (change in internal energy)?",
      options: [
        "160 J",
        "40 J",
        "60 J",
        "100 J"
      ],
      correct: 1,
      explanation: "By the First Law: ΔU = Q - W = 100 - 60 = 40 J."
    },
    {
      question: "What does entropy measure?",
      options: [
        "Internal energy",
        "Work done",
        "Disorder or randomness",
        "Temperature"
      ],
      correct: 2,
      explanation: "Entropy is a measure of molecular disorder or randomness in a system."
    },
    {
      question: "During isobaric expansion, which of these stays constant?",
      options: [
        "Pressure",
        "Volume",
        "Temperature",
        "Internal energy"
      ],
      correct: 0,
      explanation: "Isobaric means constant pressure."
    },
    {
      question: "Which of the following processes does NOT involve heat exchange?",
      options: [
        "Isothermal",
        "Adiabatic",
        "Isobaric",
        "Isochoric"
      ],
      correct: 1,
      explanation: "Adiabatic processes involve no heat exchange."
    },
    {
      question: "For a perfect gas, PV = nRT. What does R stand for?",
      options: [
        "Resistance",
        "Reaction constant",
        "Universal gas constant",
        "Radiation"
      ],
      correct: 2,
      explanation: "R is the universal gas constant used in ideal gas equations."
    },
    {
      question: "What is the unit of entropy in SI?",
      options: [
        "Joule/Kelvin",
        "Watt/Kelvin",
        "Joule",
        "Kelvin"
      ],
      correct: 0,
      explanation: "Entropy is measured in Joules per Kelvin (J/K)."
    }
  );
  questions.push(
    {
      question: "In a thermodynamic cycle, the net change in internal energy is:",
      options: [
        "Maximum",
        "Zero",
        "Minimum",
        "Infinity"
      ],
      correct: 1,
      explanation: "In a complete cycle, the system returns to its original state, so ΔU = 0."
    },
    {
      question: "A gas absorbs 200 J of heat and does 150 J of work. What is the change in internal energy?",
      options: [
        "50 J",
        "350 J",
        "150 J",
        "200 J"
      ],
      correct: 0,
      explanation: "ΔU = Q - W = 200 J - 150 J = 50 J."
    },
    {
      question: "The slope of a PV diagram for an isothermal process is:",
      options: [
        "Constant",
        "Linear",
        "Hyperbolic",
        "Zero"
      ],
      correct: 2,
      explanation: "Isothermal processes on a PV diagram follow a hyperbolic path."
    },
    {
      question: "A 1 mol ideal gas at 300 K expands isothermally from 2 L to 4 L. Work done (in J) is approximately:",
      options: [
        "173 J",
        "200 J",
        "2.3 J",
        "600 J"
      ],
      correct: 0,
      explanation: "W = nRT ln(Vf/Vi) = 1×8.314×300×ln(2) ≈ 173 J."
    },
    {
      question: "In which process is ΔQ = 0?",
      options: [
        "Isothermal",
        "Isochoric",
        "Adiabatic",
        "Isobaric"
      ],
      correct: 2,
      explanation: "Adiabatic process implies no heat exchange: Q = 0."
    },
    {
      question: "Which gas law is involved in an isothermal process?",
      options: [
        "Boyle's Law",
        "Charles's Law",
        "Gay-Lussac's Law",
        "Avogadro's Law"
      ],
      correct: 0,
      explanation: "Boyle's Law: PV = constant at constant temperature (isothermal)."
    },
    {
      question: "What is the internal energy of an ideal monoatomic gas?",
      options: [
        "(3/2)nRT",
        "(5/2)nRT",
        "nRT",
        "(1/2)nRT"
      ],
      correct: 0,
      explanation: "For monoatomic gas, U = (3/2)nRT."
    },
    {
      question: "In thermodynamics, the surroundings are:",
      options: [
        "System only",
        "Everything outside the system",
        "Just the air",
        "Only energy"
      ],
      correct: 1,
      explanation: "Surroundings include everything external to the system boundary."
    },
    {
      question: "Which is true in a reversible process?",
      options: [
        "Entropy increases",
        "Work is zero",
        "System is in equilibrium",
        "Temperature changes suddenly"
      ],
      correct: 2,
      explanation: "In reversible processes, the system is always in equilibrium with surroundings."
    },
    {
      question: "If work done by a gas is 75 J and internal energy decreases by 25 J, heat supplied is:",
      options: [
        "50 J",
        "100 J",
        "25 J",
        "0 J"
      ],
      correct: 0,
      explanation: "Q = ΔU + W = -25 + 75 = 50 J."
    }
  );
  questions.push(
    {
      question: "In an ideal gas, the total energy is a function of:",
      options: [
        "Temperature only",
        "Pressure and volume",
        "Pressure and temperature",
        "Volume and temperature"
      ],
      correct: 0,
      explanation: "For an ideal gas, the internal energy depends only on temperature."
    },
    {
      question: "Which process is characterized by constant pressure?",
      options: [
        "Isobaric",
        "Isochoric",
        "Isothermal",
        "Adiabatic"
      ],
      correct: 0,
      explanation: "In an isobaric process, pressure remains constant."
    },
    {
      question: "What is the work done by the gas during an isochoric process?",
      options: [
        "Zero",
        "Positive",
        "Negative",
        "Infinite"
      ],
      correct: 0,
      explanation: "In an isochoric process, volume remains constant, so no work is done."
    },
    {
      question: "A heat engine absorbs 300 J of heat and does 100 J of work. Its efficiency is:",
      options: [
        "50%",
        "25%",
        "33.33%",
        "75%"
      ],
      correct: 0,
      explanation: "Efficiency = W/Q_in = 100/300 = 0.33 or 33.33%."
    },
    {
      question: "What is the unit of work in thermodynamics?",
      options: [
        "Joule",
        "Newton",
        "Meter",
        "Pascal"
      ],
      correct: 0,
      explanation: "The unit of work is the Joule (J)."
    },
    {
      question: "What does the Carnot efficiency depend on?",
      options: [
        "Type of engine",
        "Temperature of the hot and cold reservoirs",
        "Efficiency of the fuel",
        "None of the above"
      ],
      correct: 1,
      explanation: "Carnot efficiency depends only on the temperatures of the hot and cold reservoirs."
    },
    {
      question: "The specific heat capacity of an ideal gas is highest during which process?",
      options: [
        "Isochoric",
        "Isothermal",
        "Isobaric",
        "Adiabatic"
      ],
      correct: 2,
      explanation: "For an ideal gas, the specific heat capacity is highest during an isobaric process."
    },
    {
      question: "In an adiabatic process, the change in internal energy equals:",
      options: [
        "Heat absorbed",
        "Work done",
        "Zero",
        "Change in temperature"
      ],
      correct: 1,
      explanation: "In an adiabatic process, heat exchange (Q) is zero, so the change in internal energy equals the work done."
    },
    {
      question: "The enthalpy change of a system is equal to:",
      options: [
        "The heat absorbed at constant volume",
        "The heat absorbed at constant pressure",
        "The work done by the system",
        "The temperature change"
      ],
      correct: 1,
      explanation: "Enthalpy change is the heat absorbed or released by the system at constant pressure."
    },
    {
      question: "A substance undergoes a phase change from liquid to gas. This process is known as:",
      options: [
        "Fusion",
        "Sublimation",
        "Vaporization",
        "Condensation"
      ],
      correct: 2,
      explanation: "The process of changing from liquid to gas is known as vaporization."
    }
  );
  questions.push(
    {
      question: "The first law of thermodynamics is a statement of the conservation of:",
      options: [
        "Energy",
        "Mass",
        "Heat",
        "Entropy"
      ],
      correct: 0,
      explanation: "The first law of thermodynamics is essentially the law of energy conservation."
    },
    {
      question: "Which of the following statements about the second law of thermodynamics is true?",
      options: [
        "It implies that the entropy of an isolated system decreases over time.",
        "It implies that energy can be created from nothing.",
        "It implies that no process is completely reversible.",
        "It implies that heat can spontaneously flow from cold to hot."
      ],
      correct: 2,
      explanation: "The second law of thermodynamics states that no process can be completely reversible."
    },
    {
      question: "What happens to the entropy of a system during an irreversible process?",
      options: [
        "It decreases",
        "It stays constant",
        "It increases",
        "It becomes zero"
      ],
      correct: 2,
      explanation: "Entropy increases in an irreversible process."
    },
    {
      question: "The efficiency of a Carnot engine depends on:",
      options: [
        "The work done",
        "The temperature difference between the two reservoirs",
        "The material of the engine",
        "The size of the engine"
      ],
      correct: 1,
      explanation: "The efficiency of a Carnot engine depends on the temperature difference between the hot and cold reservoirs."
    },
    {
      question: "The heat engine with the highest possible efficiency is a:",
      options: [
        "Rankine cycle engine",
        "Carnot engine",
        "Stirling engine",
        "Otto engine"
      ],
      correct: 1,
      explanation: "The Carnot engine is a theoretical engine with the highest possible efficiency."
    },
    {
      question: "What does the term 'enthalpy' refer to in thermodynamics?",
      options: [
        "Internal energy of a system",
        "Total energy of the system",
        "Heat content of the system",
        "Work done by the system"
      ],
      correct: 2,
      explanation: "Enthalpy is the total heat content of a system, which is the internal energy plus the product of pressure and volume."
    },
    {
      question: "In an ideal gas, the relationship between pressure, volume, and temperature is given by:",
      options: [
        "Boyle's Law",
        "Charles's Law",
        "Ideal Gas Law",
        "First Law of Thermodynamics"
      ],
      correct: 2,
      explanation: "The ideal gas law relates pressure, volume, and temperature, given by PV = nRT."
    },
    {
      question: "Which of the following statements is true for an adiabatic expansion?",
      options: [
        "The system absorbs heat from the surroundings.",
        "The temperature of the system increases.",
        "The volume of the system decreases.",
        "No heat is exchanged with the surroundings."
      ],
      correct: 3,
      explanation: "In an adiabatic process, there is no heat exchange with the surroundings."
    },
    {
      question: "The efficiency of a heat engine is defined as:",
      options: [
        "Work output divided by heat input",
        "Heat input divided by work output",
        "Temperature difference between the reservoirs",
        "Energy used divided by energy produced"
      ],
      correct: 0,
      explanation: "The efficiency of a heat engine is the ratio of the work output to the heat input."
    },
    {
      question: "The specific heat capacity at constant volume is denoted by:",
      options: [
        "Cv",
        "Cp",
        "Cw",
        "Cp/Cv"
      ],
      correct: 0,
      explanation: "Cv denotes the specific heat capacity at constant volume."
    }
  );

  function loadQuiz() {
    const quizForm = document.getElementById("quiz-form");
    const randomizedQuestions = shuffle([...questions]); // Clone + shuffle
  
    randomizedQuestions.forEach((q, index) => {
      const questionDiv = document.createElement("div");
      questionDiv.classList.add("question");
  
      const questionTitle = document.createElement("h3");
      questionTitle.textContent = `${index + 1}. ${q.question}`;
      questionDiv.appendChild(questionTitle);
  
      const optionsDiv = document.createElement("div");
      optionsDiv.classList.add("options");
  
      q.options.forEach((option, i) => {
        const label = document.createElement("label");
        const input = document.createElement("input");
        input.type = "radio";
        input.name = `question${index}`;
        input.value = i;
  
        label.appendChild(input);
        label.appendChild(document.createTextNode(option));
        optionsDiv.appendChild(label);
      });
  
      questionDiv.appendChild(optionsDiv);
      quizForm.appendChild(questionDiv);
    });
  
    window.randomizedQuestions = randomizedQuestions; // Save for scoring
  }
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
    
  
  // Function to handle quiz submission and show results
  function submitQuiz() {
    let score = 0;
  
    questions.forEach((q, index) => {
      const selected = document.querySelector(`input[name="question${index}"]:checked`);
      const options = document.getElementsByName(`question${index}`);
  
      options.forEach((opt) => {
        opt.parentElement.classList.remove("correct", "incorrect");
      });
  
      if (selected) {
        const chosen = parseInt(selected.value);
        if (chosen === q.correct) {
          score++;
          selected.parentElement.classList.add("correct");
        } else {
          selected.parentElement.classList.add("incorrect");
          const correct = document.querySelector(`input[name="question${index}"][value="${q.correct}"]`);
          if (correct) correct.parentElement.classList.add("correct");
        }
  
        // Show explanation for missed questions
        if (chosen !== q.correct) {
          alert(`You missed Question ${index + 1}: ${q.explanation}`);
        }
      }
    });
  
    document.getElementById("result").textContent = `You scored ${score} out of ${questions.length}.`;
  }
  
  document.getElementById("submit-btn").addEventListener("click", submitQuiz);
  window.onload = loadQuiz;
  