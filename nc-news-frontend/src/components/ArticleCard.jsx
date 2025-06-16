import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ArticleCard({article}) {

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={article.article_img_url} />
      <Card.Body>
        <Card.Title>{article.title}</Card.Title>
        <Card.Text>
          {article.synopsis}
        </Card.Text>
        <Button variant="primary">Read full post</Button>
      </Card.Body>
    </Card>
  );
}

export default ArticleCard