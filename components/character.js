import React, { useState } from 'react';

export default function CharacterStats() {
  const [character, setCharacter] = useState({
    name: 'Gandalf',
    strength: 10,
    intelligence: 18,
    charisma: 16,
  });

  function handleChange(e) {
    setCharacter({
      ...character,
      [e.target.name]: e.target.value
    });
  }

  return (
    
    <div>
        <label>
      Name:
      <input
        name="name"
        value={character.name}
        onChange={handleChange}
      />
    </label>

    <label>
        strength:
        <input
        name='strength'
        value={character.strength}
        onChange={handleChange}
        />
        </label>

        <label>
        Intelligence:
        <input
        name='intelligence'
        value={character.intelligence}
        onChange={handleChange}
        />
        </label>

        <label>
        Charisma:
        <input
        name='charisma'
        value={character.charisma}
        onChange={handleChange}
        />
        </label>

    </div>
    
  );
}
