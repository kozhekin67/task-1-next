const smoothScrolling = id => {
  const section = document.getElementById(id);
  section.scrollIntoView({ behavior: 'smooth' });
};

export default smoothScrolling;
