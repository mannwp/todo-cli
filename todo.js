#!/usr/bin/env node

import { Command } from "commander";
import axios from "axios";
import { select } from "@inquirer/prompts";
const program = new Command();
const API = "http://localhost:3000/todos";

program.name("todo").description("CLI for Todo API").version("1.0.0");

// CREATE
program
  .command("create <title>")
  .description("Create a todo")
  .action(async (title) => {
    const res = await axios.post(API, { title });
    console.log("Created:", res.data);
  });

// LIST
program
  .command("list")
  .description("List todos")
  .action(async () => {
    const res = await axios.get(API);

    res.data.forEach((t) =>
      console.log(`${t.completed ? "✔" : "✗"} ${t.id} — ${t.title}`),
    );
  });

// DONE
program
  .command("done [id]")
  .description("Mark todo as completed")
  .action(async (id) => {
    // If ID provided → normal mode
    if (id) {
      const res = await axios.patch(`${API}/${id}`, {
        completed: true,
      });

      console.log("Updated:", res.data);
      return;
    }

    // ⭐ Interactive mode
    const res = await axios.get(API);

    if (!res.data.length) {
      console.log("No todos found");
      return;
    }
    console.log(res.data);
    const selectedId = await select({
      message: "Select todo to mark done:",
      choices: res.data.map((t) => ({
        name: `${t.completed ? "✔" : "✗"} ${t.id} — ${t.title}`,
        value: t.id,
      })),
    });

    const updated = await axios.patch(`${API}/${selectedId}`, {
      completed: true,
    });

    console.log("Marked done:", updated.data.title);
  });

program
  .command("undone [id]")
  .description("Mark todo as undone")
  .action(async (id) => {
    // If ID provided → normal mode
    if (id) {
      const res = await axios.patch(`${API}/${id}`, {
        completed: false,
      });

      console.log("Updated:", res.data);
      return;
    }

    // ⭐ Interactive mode
    const res = await axios.get(API);

    if (!res.data.length) {
      console.log("No todos found");
      return;
    }
    console.log(res.data);
    const selectedId = await select({
      message: "Select todo to mark undone:",
      choices: res.data.map((t) => ({
        name: `${t.completed ? "✔" : "✗"} ${t.id} — ${t.title}`,
        value: t.id,
      })),
    });

    const updated = await axios.patch(`${API}/${selectedId}`, {
      completed: false,
    });

    console.log("Marked undone:", updated.data.title);
  });
program
  .command("update <id> <title>")
  .description("Update a todo")
  .action(async (id, title) => {
    const res = await axios.patch(`${API}/${id}`, {
      title,
    });

    console.log("Updated:", res.data);
  });
// DELETE
program
  .command("delete <id>")
  .description("Delete a todo")
  .action(async (id) => {
    const res = await axios.delete(`${API}/${id}`);
    console.log("Deleted:", id, res.data);
  });
program
  .command("empty")
  .description("Delete all todos")
  .action(async () => {
    const res = await axios.delete(API);
    console.log("Deleted:", res.data);
  });
program.parse();
