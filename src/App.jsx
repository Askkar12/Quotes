import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [quotes, setQuotes] = useState([]);
  const [randomQuote, setRandomQuote] = useState({ quote: '', author: '' });

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await fetch('https://dummyjson.com/quotes');
        const data = await response.json();
        setQuotes(data.quotes);
      } catch (err) {
        console.log(err);
      }
    };
    fetchApi();
  }, []);

  const generate = () => {
    if (quotes.length > 0) {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setRandomQuote(quotes[randomIndex]);
    }
  };

  return (
    <div className="app-container">
    <Card className="quote-card">
      <CardContent>
        <Typography gutterBottom variant="h4" component="div" align="center">
          Inspiring Quote
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', textAlign: 'center', marginBottom: 2 }}>
          "{randomQuote.quote || 'Click the button for a quote!'}"
        </Typography>
        <Typography variant="body2" sx={{ fontStyle: 'italic', color: 'text.primary', marginTop: 1 }}>
          - {randomQuote.author || ''}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="primary" size="large" onClick={generate} fullWidth>
          New Quote
        </Button>
      </CardActions>
    </Card>
  </div>
  );
}

export default App;
