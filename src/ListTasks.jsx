import { useState } from 'react';
import {
  Card,
  Button,
  Typography,
  List,
  ListItem,
  IconButton,
  Checkbox,
  ListItemDecorator,
  ListItemContent,
  Input,
  Tooltip,
} from '@mui/joy';
import { Delete } from '@mui/icons-material';

function ListTasks() {
  const [tasks, setTasks] = useState([
    { title: 'Составить резюме', isDone: true },
    { title: 'Разместить объявление на куфаре', isDone: false },
    { title: 'Убрать квартиру', isDone: false },
    { title: 'Заказать книги', isDone: false },
    { title: 'Сходить на массаж', isDone: false },
  ]);

  const [inputTask, setInputTask] = useState('');

  function addTask(event) {
    if (inputTask === '') return;
    setTasks([...tasks, { title: inputTask, isDone: false }]);
    setInputTask('');
    event.preventDefault();
  }
  function deleteTask(index) {
    const copy = [...tasks];
    copy.splice(index, 1);
    setTasks(copy);
  }
  function setTaskIsDone(checked, index) {
    const copy = [...tasks];
    copy[index].isDone = checked;
    setTasks(copy);
    console.log(tasks);
  }
  return (
    <>
      <Card
        sx={{ '--Card-radius': '25px'}}
        variant="outlined"
      >
        <Typography
          color="success"
          variant="solid"
          textAlign={'center'}
          level="h2"
        >
          Todo List
        </Typography>

        <List>
          {tasks.map((task, index) => (
            <ListItem
              key={task.title}
              endAction={
                <Tooltip
                  title="Удалить"
                  size="sm"
                  placement="right-start"
                  color="neutral"
                >
                  <IconButton
                    variant="plain"
                    color="danger"
                    aria-label="Delete"
                    size="sm"
                    onClick={() => deleteTask(index)}
                  >
                    <Delete variant="soft" color="danger" size="sm" />
                  </IconButton>
                </Tooltip>
              }
            >
              <ListItemDecorator>
                <Checkbox
                  color="neutral"
                  variant="outlined"
                  size="sm"
                  checked={task.isDone}
                  onChange={(event) =>
                    setTaskIsDone(event.target.checked, index)
                  }
                ></Checkbox>
              </ListItemDecorator>

              <ListItemContent> {task.title}</ListItemContent>
            </ListItem>
          ))}
        </List>
        <form onSubmit={addTask}>
          <Input
            sx={{
              '--Input-focusedThickness': '0px',
            }}
            color="neutral"
            value={inputTask}
            onChange={(event) => setInputTask(event.target.value)}
            placeholder="Ввести задачу…"
            variant="outlined"
            endDecorator={
              <Button
                color="success"
                variant="solid"
                type="submit"
                disabled={inputTask === ''}
              >
                Новая задача
              </Button>
            }
          ></Input>
        </form>
      </Card>
    </>
  );
}
export default ListTasks;
