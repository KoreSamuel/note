import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { addTodo, toggle_todo, setVisibilityFilter, VisibilityFilter} from '../actions';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import Footer from '../components/Footer';