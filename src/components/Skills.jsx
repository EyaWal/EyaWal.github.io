import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

import "./Skills.css";

export default function Skills() {
  const { t, content } = useLanguage();
  const { skills } = content;

  const [activeGroup, setActiveGroup] = useState(0);
  const [activeSkill, setActiveSkill] = useState(0);

  const group = skills[activeGroup];
  const selected = group.items[activeSkill];

  function selectGroup(index) {
    setActiveGroup(index);
    setActiveSkill(0);
  }

  return (
    <section id="competences" className="pad">
      <h2>{t.sections.stack}</h2>

      <div className="skill-tree">
        <div className="tree-terminal">
          <span>~/eya/skills/tree</span>
          <span className="tree-online">
            ● {t.skills.online}
          </span>
          
        </div>

      
        <p className="tree-intro">
          {t.skills.intro}
        </p>

        <div className="tree-root">
          <span>✳ DATA / MACHINE LEARNING / {t.skills.ai}</span>
        </div>

        <div className="tree-growing-paths" aria-hidden="true">
          <svg
            viewBox="0 0 1000 140"
            preserveAspectRatio="none"
            className="tree-svg"
          >
            <path className="tree-path trunk" d="M500 0 L500 35" />

            <path
              className={`tree-path branch-path ${activeGroup === 0 ? "selected" : ""}`}
              d="M500 35 C500 65 125 55 125 140"
            />

            <path
              className={`tree-path branch-path ${activeGroup === 1 ? "selected" : ""}`}
              d="M500 35 C500 65 375 55 375 140"
            />

            <path
              className={`tree-path branch-path ${activeGroup === 2 ? "selected" : ""}`}
              d="M500 35 C500 65 625 55 625 140"
            />

            <path
              className={`tree-path branch-path ${activeGroup === 3 ? "selected" : ""}`}
              d="M500 35 C500 65 875 55 875 140"
            />
          </svg>
        </div>

        <div className="tree-branches">
          {skills.map((item, index) => (
            <button
              type="button"
              key={item.group}
              className={`tree-branch ${
                activeGroup === index ? "active" : ""
              }`}
              onClick={() => selectGroup(index)}
              aria-pressed={activeGroup === index}
            >
              <span className="branch-icon">{item.icon}</span>
              <span>{item.group}</span>
              <small>{item.items.length} {t.skills.count}</small>
            </button>
          ))}
        </div>

        <div className="tree-trunk" aria-hidden="true" />

        <div className="tree-leaves">
          <div className="tree-leaves-header">
            <h3>{group.group}</h3>
            <span>{group.items.length} {t.skills.count}</span>
          </div>

          <div className="tree-skill-list">
            {group.items.map((skill, index) => (
              <button
                type="button"
                key={skill.name}
                className={`tree-skill ${
                  skill.level === "learning" ? "learning" : ""
                } ${activeSkill === index ? "active" : ""}`}
                onClick={() => setActiveSkill(index)}
                aria-pressed={activeSkill === index}
              >
                <span aria-hidden="true">
                  {skill.level === "learning" ? "🌱" : "↳"}
                </span>
                {skill.name}
              </button>
            ))}
          </div>
        </div>

        <div className="tree-trunk" aria-hidden="true" />

        <div className="tree-detail" aria-live="polite">
          <strong>{selected.name}</strong>
          <p>{selected.description}</p>
          <span
            className={
              selected.level === "learning"
                ? "detail-learning"
                : "detail-practiced"
            }
          >
            {selected.level === "learning"
              ? `🌱 ${t.skills.learning}`
              : `● ${t.skills.practiced}`}

            
          </span>
        </div>

        <div className="tree-legend">
            <span>● {t.skills.practicedSkill}</span>
            <span>🌱 {t.skills.learning}</span>
            <span>↗ {t.skills.explore}</span>
        </div>
      </div>
    </section>
  );
}
