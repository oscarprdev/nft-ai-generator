CREATE TABLE users (
		    id UUID PRIMARY KEY,
		    name varchar(255) NOT NULL,
		    email varchar(255) UNIQUE NOT NULL,
		    password varchar(255) NOT NULL
		);

CREATE TABLE art (
		    id UUID PRIMARY KEY,
		    url varchar(255) UNIQUE NOT NULL,
            title varchar(255) NOT NULL,
		    prompt varchar(255) NOT NULL,
		    isNft BOOLEAN DEFAULT FALSE,
			keywords VARCHAR[],
		    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
		    user_id UUID REFERENCES users(id)
		);

CREATE TABLE art_likes (
            id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
            user_id UUID REFERENCES users(id),
            art_id UUID REFERENCES art(id),
            UNIQUE (user_id, art_id)
);

INSERT INTO art_likes ( user_id, art_id ) VALUES (
            '260fb5e0-619e-410a-af31-672d30fe54bf',
            'bccaa710-f6a4-4734-ac18-0ada7710bf73' 
);